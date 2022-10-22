class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }


    newAdditions(footballPlayers) {

        let result = [];
        footballPlayers.forEach(e => {
            let [name, age, playerValue] = e.split('/');

            age = Number(age);
            playerValue = Number(playerValue);

            let existingPlayer = this.invitedPlayers.find(p => p.name === name);

            if (existingPlayer) {
                existingPlayer.playerValue = playerValue;
            } else if (!existingPlayer) {
                this.invitedPlayers.push({name, age, playerValue});
            }
            if (result.indexOf(name) < 0) {
                result.push(name);
            }
        });


        return 'You successfully invite ' + result.join(', ') + '.';
    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split('/');

        let existingPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        playerOffer = Number(playerOffer);
        if (existingPlayer.playerValue > playerOffer) {
            let priceDifference = existingPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        existingPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        age = Number(age);

        let existingPlayer = this.invitedPlayers.find(p => p.name === name);

        if (!existingPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (existingPlayer.age < age) {
            let ageDifference = age - existingPlayer.age;

            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            }
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
        }
        return `${name} is above age limit!`;
    }

    transferWindowResult() {
        let result = `Players list:\n`;
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name))
            .forEach(p => result += `Player ${p.name}-${p.playerValue}\n`);

        return result.trim();
    }
}