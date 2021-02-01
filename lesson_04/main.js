    // 1. Написать функцию, преобразующую число в объект.
    // Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
    // Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
    // Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

    function obj2num(num) {
      var result = {};

      if (isNaN(num) || num > 999 || num < 0) { 
        console.error(`Input ${num} is out of range [0..999] or not a number`); 
      }
      else {
        result.units = num % 10;
        result.decimals = num % 100 - result.units;
        result.hundrets = num - result.decimals - result.units;
      }
    
      return result;
    }

    document.write(`obj2num(-1): ${JSON.stringify(obj2num(-1))}<br>`);
    document.write(`obj2num(0): ${JSON.stringify(obj2num(0))}<br>`);
    document.write(`obj2num(1): ${JSON.stringify(obj2num(1))}<br>`);
    document.write(`obj2num(7): ${JSON.stringify(obj2num(7))}<br>`);
    document.write(`obj2num(78): ${JSON.stringify(obj2num(78))}<br>`);
    document.write(`obj2num(789): ${JSON.stringify(obj2num(789))}<br>`);
    document.write(`obj2num(999): ${JSON.stringify(obj2num(999))}<br>`);
    document.write(`obj2num(9999): ${JSON.stringify(obj2num(9999))}<br>`);


    // 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)
    // не нашел исходники в файлах, прикрепленных к уроку

    // Суть игры: ваш соперник, будь то компьютер или друг, загадывает 4-значное число, состоящее из неповторяющихся цифр.
    // Ваша задача - угадать его за ограниченное число ходов.
    // В качестве подсказок выступают “коровы” (цифра угадана, но её позиция - нет) и “быки” (когда совпадает и цифра и её позиция).
    // То есть если загадано число “1234”, а вы называете “6531”, то результатом будет 1 корова (цифра “1”) и 1 бык (цифра “3”) .

    function Game () {
      this.init = function(min=1000, max=9999) {
        var secret = {};

        if (min < 1000 || max > 9999 || min > max) {
          console.error('Error while initializing the game');
          return;
        }

        do {
          secret.number = ~~(Math.random() * (max - min) + min);
          secret.digits = Array.from(new Set(secret.number.toString().split('')));
        } while (secret.digits.length !== 4)

        this.secret = secret;
      }

      this.run = function(maxTurnsNum=5) {
        var hasWon = false;
        var currentTurnNum = 0;
        var savedTurns = [];

        while (currentTurnNum < maxTurnsNum) {
          var guess = {};

          console.log(`Turn number ${currentTurnNum + 1}`);
          
          while (true) {
            guess.number = +prompt('Enter a number of four different digits:');
            guess.digits = Array.from(new Set(guess.number.toString().split('')));
            if (guess.digits.length === 4) break;
          }

          console.log(`You said ${guess.number}`);

          hasWon = this.secret.number === guess.number;
          if (hasWon) { 
            console.log('Victory!');
            savedTurns.push({'guess': guess.number, 'result': 'Victory!'});
            return;
          }
          else {
            var bulls = 0;
            var cows = 0;
            var hint = '';

            for (var i = 0; i < 4; i++) {
              if (this.secret.digits[i] === guess.digits[i]) bulls += 1;
              else if (this.secret.digits.indexOf(guess.digits[i]) > -1) cows += 1;
            }
            hint = `Wrong! Hint: bulls found ${bulls}, cows found ${cows}`;
            console.log(hint);
            savedTurns.push({'guess': guess.number, 'result': hint});
            currentTurnNum += 1;
          }
        }
        console.log('Game over');

        // добавить возможность вывода хода номер n (номер задается пользователем)
        while (true) {
          var turnNumber;
          var turn;

          turnNumber = +prompt('Enter the turn number to check your answer and a hint or type 0 to exit:', 0);
          if (turnNumber === 0) break;
          if (turnNumber < 0 || turnNumber > savedTurns.length) {
            console.log(`Turn number ${turnNumber} was not found. Only ${savedTurns.length} are available`)
            continue;
          }
          turn = savedTurns[turnNumber - 1];
          console.log(`Turn number ${turnNumber}: you said ${turn.guess} and result was ${turn.result}`);
        }
      }
    };

    var game = new Game();
    game.init();
    console.log(game.secret.number);
    game.run();

    // 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
    // не стал делать, т.к. не в курсе, что это за игра