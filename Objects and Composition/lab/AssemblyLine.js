function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    car.temp++;
                } else if (this.temp > this.tempSettings) {
                    car.temp--;
                }
            }
        },
        hasAudio(car) {
            car.currentTrack = {
                name: null,
                artist: null
            }
            car.nowPlaying = function () {
                if (this.currentTrack !== null && this.currentTrack !== undefined) {
                    console.log(`Now playing '${this.currentTrack.name}' by '${this.currentTrack.artist}'`);
                }
            };
        },
        hasParktronic(car) {
            car.checkDistance = (distance) => {
                let message = '';
                if (distance < 0.1) {
                    message = 'Beep! Beep! Beep!';
                } else if (distance < 0.25) {
                    message = 'Beep! Beep!';
                } else if (distance < 0.5) {
                    message = 'Beep!';
                }
                console.log(message);
            };
        },
    };
}

const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};

myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);