import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent implements OnInit {

	playerWon = false;

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


	constructor() { }

	ngOnInit(): void {
	}

	onBlockClick(selectedBlock) {

		this.fillUserBlock(selectedBlock);

		this.fillComputerBlock();

		this.checkWinningCombination('green');

	}

	fillComputerBlock() {
		for(let element of this.gridArr) {
			if (element.color === '') {
				element.color = 'red';
				return;
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
				this.resetGame();
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
	}
}


