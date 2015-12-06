module ImprovedInitiative {
  export class Command {
    Description: string;
    KeyBinding: string;
    ActionBarIcon: string;
    ActionBinding: () => any;
    ShowOnActionBar: KnockoutObservable<boolean>;
  }
  
  export var BuildCommandList = (c: Commander) => [
      { Description: 'Roll Initiative', 
        KeyBinding: 'alt+r',
        ActionBarIcon: 'fa-play', 
        ActionBinding: c.RollInitiative,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Open Creature Library', 
        KeyBinding: 'alt+a',
        ActionBarIcon: 'fa-user-plus', 
        ActionBinding: c.ShowLibraries,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Show Player Window', 
        KeyBinding: 'alt+w',
        ActionBarIcon: 'fa-users', 
        ActionBinding: c.LaunchPlayerWindow,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Select Next Combatant', 
        KeyBinding: 'j',
        ActionBarIcon: 'fa-arrow-down', 
        ActionBinding: c.SelectNextCombatant,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Select Previous Combatant', 
        KeyBinding: 'k',
        ActionBarIcon: 'fa-arrow-up', 
        ActionBinding: c.SelectPreviousCombatant,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Next Turn', 
        KeyBinding: 'n',
        ActionBarIcon: 'fa-step-forward', 
        ActionBinding: c.NextTurn,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Previous Turn', 
        KeyBinding: 'alt+n',
        ActionBarIcon: 'fa-step-backward', 
        ActionBinding: c.PreviousTurn,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Damage/Heal Selected Combatant', 
        KeyBinding: 't',
        ActionBarIcon: 'fa-plus-circle', 
        ActionBinding: c.FocusSelectedCreatureHP,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Add Note to Selected Combatant', 
        KeyBinding: 'g',
        ActionBarIcon: 'fa-tag', 
        ActionBinding: c.AddSelectedCreatureTag,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Remove Selected Combatant from Encounter', 
        KeyBinding: 'del',
        ActionBarIcon: 'fa-remove', 
        ActionBinding: c.RemoveSelectedCreatures,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Rename Selected Combatant', 
        KeyBinding: 'f2',
        ActionBarIcon: 'fa-i-cursor', 
        ActionBinding: c.EditSelectedCreatureName,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Edit Selected Combatant', 
        KeyBinding: 'alt+e',
        ActionBarIcon: 'fa-edit', 
        ActionBinding: c.EditSelectedCreatureStatBlock,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Edit Selected Combatant Initiative', 
        KeyBinding: 'alt+i',
        ActionBarIcon: 'fa-play-circle-o', 
        ActionBinding: c.EditSelectedCreatureInitiative,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Move Selected Combatant Down', 
        KeyBinding: 'alt+j',
        ActionBarIcon: 'fa-angle-double-down', 
        ActionBinding: c.MoveSelectedCreatureDown,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Move Selected Combatant Up', 
        KeyBinding: 'alt+k',
        ActionBarIcon: 'fa-angle-double-up', 
        ActionBinding: c.MoveSelectedCreatureUp,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Add Temporary HP', 
        KeyBinding: 'alt+t',
        ActionBarIcon: 'fa-medkit', 
        ActionBinding: c.AddSelectedCreaturesTemporaryHP,
        ShowOnActionBar: ko.observable(false) },
      { Description: 'Save Encounter', 
        KeyBinding: 'alt+s',
        ActionBarIcon: 'fa-save', 
        ActionBinding: c.SaveEncounter,
        ShowOnActionBar: ko.observable(true) },
      { Description: 'Show Help and Keybindings', 
        KeyBinding: '?',
        ActionBarIcon: 'fa-question-circle', 
        ActionBinding: c.ToggleCommandDisplay,
        ShowOnActionBar: ko.observable(true) }
    ]
}