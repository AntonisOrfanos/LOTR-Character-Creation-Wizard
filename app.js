const app = new Vue({
    el: '#app',
    data: {
        cultures : cultures,
        selected_culture: {},
        character : {
            Favoured_Attributes: [],
            Calling: "",
            Favoured_Skills: [],
            Trait: "",
            Shadow_Weakness: "",
            Endurance: "",
            Hope: "",
            Valour: "",
            Wisdom: "",
            Starting_Reward: "",
            Starting_Virtue: "",
            Gear: [],
            Fatigue: "",
            Combat_Ratings: [],
            Age: "",
            Name: ""
        }
    }
})