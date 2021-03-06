import * as ko from "knockout";
import * as React from "react";
import * as io from "socket.io-client";

import { env, LoadEnvironment } from "./Environment";
import { LauncherViewModel } from "./LauncherViewModel";
import { ReactPlayerView } from "./Player/ReactPlayerView";
import { render as renderReact } from "react-dom";
import { InitializeSettings, CurrentSettings } from "./Settings/Settings";
import { TrackerViewModel } from "./TrackerViewModel";
import { RegisterBindingHandlers } from "./Utility/CustomBindingHandlers";
import { LegacySynchronousLocalStore } from "./Utility/LegacySynchronousLocalStore";
import { App } from "./App";

$(async () => {
  LoadEnvironment();
  RegisterBindingHandlers();
  InitializeSettings();
  if ($("#tracker").length) {
    await LegacySynchronousLocalStore.MigrateItemsToStore();
    if (env.HasEpicInitiative) {
      const customEncounterId = CurrentSettings().PlayerView.CustomEncounterId;
      if (customEncounterId.length) {
        env.EncounterId = customEncounterId;
      }
    }
    const viewModel = new TrackerViewModel(io());

    const container = document.getElementById("app__container");
    if (!container) {
      throw "#app__container not found";
    }
    renderReact(React.createElement(App, { tracker: viewModel }), container);

    viewModel.ImportEncounterIfAvailable();
    viewModel.ImportStatBlockIfAvailable();
    viewModel.GetWhatsNewIfAvailable();
  }

  if ($("#playerview").length) {
    const encounterId = env.EncounterId;
    const container = document.getElementById("playerview__container");
    if (!container) {
      throw "#playerview__container not found";
    }
    const playerView = new ReactPlayerView(container, encounterId);
    playerView.LoadEncounterFromServer();
    playerView.ConnectToSocket(io());
  }

  if ($("#landing").length) {
    const launcherViewModel = new LauncherViewModel();
    ko.applyBindings(launcherViewModel, document.body);
  }

  $(".loading-splash").hide();
});
