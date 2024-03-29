class SmartHike {
    constructor (username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal (peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude
           return `You have successfully added a new goal - ${peak}`
        }
    }
    hike (peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw Error (`${peak} is not in your current goals`)
        }
        if (this.goals.hasOwnProperty(peak)) {
            if (this.resources <= 0) {
                throw Error ("You don't have enough resources to start the hike");
            } 
            let diff = this.resources - (Number (time) * 10);
            if (diff < 0) {
                return "You don't have enough resources to complete the hike"
            } else {
                this.resources = diff;
                this.listOfHikes.push({peak, time, difficultyLevel});
                return `You hiked ${peak} peak for ${time} hours and you have ${diff}% resources left`
            }


        }
    }
    rest (time) {
        if (this.resources + (Number(time) * 10) > 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        } else {
            this.resources += (Number (time) * 10);
            return `You have rested for ${time} hours and gained ${time*10}% resources`
        }
    }
    showRecord (criteria) {
        if (this.listOfHikes.length <= 0) {
            return `${this.username} has not done any hiking yet`
        }
        
        let sorted;
        if (criteria == "hard") {   
            sorted = this.listOfHikes.sort((a,b) => a.time - b.time).filter(e => e.difficultyLevel == criteria)
            if (sorted.length <= 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
        }
        else if (criteria == "easy") {
            sorted = this.listOfHikes.sort((a,b) => a.time - b.time).filter(e => e.difficultyLevel == criteria)
            if (sorted.length <= 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }
            return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`
        }
        else if (criteria == "all") {
            let result = [];
            for (const el of this.listOfHikes) {
                result.push(`${this.username} hiked ${el.peak} for ${el.time} hours`);
            }
            result.unshift('All hiking records:')
            return result.join('\n')
        }
        
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));







