Vue.createApp({
	data() {
		return {
			randomEmails: [],
			quantityToGenerate: 10,
			requestsCompleted: false
		};
	},
	methods: {
		generateEmail: function () {
			this.requestsCompleted = false;
			for(let i = 1; i <= this.quantityToGenerate; i++){
				axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(resp => {
					console.log(resp.data)
					const email = resp.data.response;
					this.randomEmails.push(email)
					if(i === this.quantityToGenerate){
						this.requestsCompleted = true
					}
				})
			}
		},
	},
}).mount("#app");
