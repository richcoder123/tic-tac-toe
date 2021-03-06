import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {

	playerWon = false;

	colorAndPlayer = [
		{
			color: 'green',
			player: 'player 1'
		},
		{
			color: 'red',
			player: 'computer'
		}
	];

	winningCombinations = [
		[0, 1, 2],
		[0, 3, 6],
		[0, 4, 8],
		[1, 4, 7],
		[2, 5, 8],
		[2, 4, 6],
		[3, 4, 5],
		[6, 7, 8]
	];

	gridArr = [{
		color: '',
		id: 0
	}, {
		color: '',
		id: 1
	}, {
		color: '',
		id: 2
	}, {
		color: '',
		id: 3
	}, {
		color: '',
		id: 4
	}, {
		color: '',
		id: 5
	}, {
		color: '',
		id: 6
	}, {
		color: '',
		id: 7
	}, {
		color: '',
		id: 8
	}];

	readonly centreAndCornerIndex = [0, 2, 6, 8, 4];
	playerName: { color: string; player: string; };

	constructor() { }

	ngOnInit(): void {
	}

	onBlockClick(selectedBlock) {
		if (!this.playerWon) {
			this.fillUserBlock(selectedBlock);
			this.checkWinningCombination('green');
			this.fillComputerBlock();
			this.checkWinningCombination('red');
		}
	}

	fillComputerBlock() {
		let flag = 0;
		for (let index of this.centreAndCornerIndex) {
			if (this.gridArr[index].color === '') {
				this.gridArr[index].color = 'red';
				flag++;
				return;
			}
		}
		if (flag === 0) {
			for(let element of this.gridArr) {
				if (element.color === '') {
					element.color = 'red';
					return;
				}
			}
		}
	}

	checkWinningCombination(color) {
		this.winningCombinations.forEach((winCombination) => {
			let flag = 0;
			winCombination.forEach((index) => {
				if (this.gridArr[index].color === color) {
					flag++;
				}
			});

			if (flag === 3) {
				this.playerWon = true;
				this.playerName = this.colorAndPlayer.find(name => {
					if (name.color === color) {
						return name.player;
					}
				})
			}
			flag = 0;
		});
	}

	fillUserBlock(selectedBlock: any) {
		selectedBlock.color = 'green';
	}

	resetGame() {
		this.gridArr.forEach((block) => {
			block.color = '';
		});
		this.playerWon = false;
	}
}


