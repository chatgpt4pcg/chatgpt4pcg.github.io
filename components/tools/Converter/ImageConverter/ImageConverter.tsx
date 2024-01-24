import { GRID_HEIGHT, GRID_WIDTH, getHighestBlock, getLeftMostBlock, getRightMostBlock } from 'chatgpt4pcg/lib/converter/converter';
import React, { useEffect, useRef, useState } from 'react';

import { Block } from 'chatgpt4pcg';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';
import styles from './ImageConverter.module.css';

const ONE_GRID_CELL_SIZE = 24;
const CANVAS_WIDTH = GRID_WIDTH * ONE_GRID_CELL_SIZE;
const CANVAS_HEIGHT = GRID_HEIGHT * ONE_GRID_CELL_SIZE;

type ImageConverterProps = {
	blocksResult: Block[];
	fileCounter: number;
};

export default function ImageConverter({
	blocksResult,
	fileCounter,
}: Readonly<ImageConverterProps>) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const imageCanvasRef = useRef<HTMLCanvasElement>(null);
	const [isGridVisible, setIsGridVisible] = useState(true);
	const [isBlockImage, setIsBlockImage] = useState(false);
	const [imageCanvasDataString, setImageCanvasDataString] = useState('');

	function drawGrid() {
		const canvasContext = canvasRef.current!.getContext('2d')!;
		const imageCanvasContext = imageCanvasRef.current!.getContext('2d')!;

		canvasContext.canvas.width = CANVAS_WIDTH;
		canvasContext.canvas.height = CANVAS_HEIGHT;

		canvasContext.fillStyle = 'white';
		canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		imageCanvasContext.canvas.width = CANVAS_WIDTH;
		imageCanvasContext.canvas.height = CANVAS_HEIGHT;

		imageCanvasContext.fillStyle = 'white';
		imageCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

		canvasContext.strokeStyle = 'lightgray';

		for (let i = 1; i < GRID_WIDTH; i++) {
			canvasContext.moveTo(ONE_GRID_CELL_SIZE * i, 0);
			canvasContext.lineTo(ONE_GRID_CELL_SIZE * i, CANVAS_HEIGHT);
			canvasContext.stroke();
		}

		for (let i = 1; i < GRID_HEIGHT; i++) {
			canvasContext.moveTo(0, ONE_GRID_CELL_SIZE * i);
			canvasContext.lineTo(CANVAS_WIDTH, ONE_GRID_CELL_SIZE * i);
			canvasContext.stroke();
		}
	}

	function drawResult() {
		const canvasContext = canvasRef.current!.getContext('2d')!;
		const imageCanvasContext = imageCanvasRef.current!.getContext('2d')!;

		const leftMostBlock = getLeftMostBlock(blocksResult);
		const rightMostBlock = getRightMostBlock(blocksResult);
		const highestBlock = getHighestBlock(blocksResult);

		const numEmptyCellOnLeft = parseInt(leftMostBlock.position.x.toFixed());
		const numEmptyCellOnRight =
			GRID_WIDTH - 1 - parseInt(rightMostBlock.position.x.toFixed());
		const numEmptyCellVertical =
			GRID_HEIGHT - 1 - parseInt(highestBlock.position.y.toFixed());

		const numEmptyCellHorizontal = numEmptyCellOnLeft + numEmptyCellOnRight;
		const horizontalShift =
			(Math.floor(numEmptyCellHorizontal / 2) - numEmptyCellOnLeft) *
			ONE_GRID_CELL_SIZE;
		const verticalShift =
			Math.floor(numEmptyCellVertical / 2) * ONE_GRID_CELL_SIZE;

		blocksResult.forEach((block) => {
			const blockX = parseInt(block.position.x.toFixed()) * ONE_GRID_CELL_SIZE;
			const blockY = parseInt(block.position.y.toFixed()) * ONE_GRID_CELL_SIZE;
			const blockWidth = block.size.width * ONE_GRID_CELL_SIZE;
			const blockHeight = block.size.height * ONE_GRID_CELL_SIZE;
			const halfWidth = Math.floor(block.size.width / 2) * ONE_GRID_CELL_SIZE;

			canvasContext.fillStyle = 'black';
			canvasContext.fillRect(
				blockX - halfWidth,
				CANVAS_HEIGHT - blockHeight - blockY,
				blockWidth,
				blockHeight
			);

			imageCanvasContext.fillStyle = 'black';
			imageCanvasContext.fillRect(
				blockX - halfWidth + horizontalShift,
				CANVAS_HEIGHT - blockHeight - blockY - verticalShift,
				blockWidth,
				blockHeight
			);
		});
	}

	function drawResultWithImage() {
		const canvasContext = canvasRef.current!.getContext('2d')!;
		const imageCanvasContext = imageCanvasRef.current!.getContext('2d')!;

		const leftMostBlock = getLeftMostBlock(blocksResult);
		const rightMostBlock = getRightMostBlock(blocksResult);
		const highestBlock = getHighestBlock(blocksResult);

		const numEmptyCellOnLeft = parseInt(leftMostBlock.position.x.toFixed());
		const numEmptyCellOnRight =
			GRID_WIDTH - 1 - parseInt(rightMostBlock.position.x.toFixed());
		const numEmptyCellVertical =
			GRID_HEIGHT - 1 - parseInt(highestBlock.position.y.toFixed());

		const numEmptyCellHorizontal = numEmptyCellOnLeft + numEmptyCellOnRight;
		const horizontalShift =
			(Math.floor(numEmptyCellHorizontal / 2) - numEmptyCellOnLeft) *
			ONE_GRID_CELL_SIZE;
		const verticalShift =
			Math.floor(numEmptyCellVertical / 2) * ONE_GRID_CELL_SIZE;

		blocksResult.forEach((block) => {
			const blockX = parseInt(block.position.x.toFixed()) * ONE_GRID_CELL_SIZE;
			const blockY = parseInt(block.position.y.toFixed()) * ONE_GRID_CELL_SIZE;
			const blockWidth = block.size.width * ONE_GRID_CELL_SIZE;
			const blockHeight = block.size.height * ONE_GRID_CELL_SIZE;
			const halfWidth = Math.floor(block.size.width / 2) * ONE_GRID_CELL_SIZE;

			const image = new Image(blockWidth, blockHeight);
			image.src = `/images/${block.id}.png`;
			image.onload = () => {
				canvasContext.drawImage(
					image,
					blockX - halfWidth,
					CANVAS_HEIGHT - blockHeight - blockY,
					blockWidth,
					blockHeight
				);
			};

			imageCanvasContext.fillStyle = 'black';
			imageCanvasContext.fillRect(
				blockX - halfWidth + horizontalShift,
				CANVAS_HEIGHT - blockHeight - blockY - verticalShift,
				blockWidth,
				blockHeight
			);
		});
	}

	function clearCanvas() {
		const canvasContext = canvasRef.current!.getContext('2d')!;
		const imageCanvasContext = imageCanvasRef.current!.getContext('2d')!;
		canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		canvasContext.fillStyle = 'white';
		canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		imageCanvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		imageCanvasContext.fillStyle = 'white';
		imageCanvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	}

	useEffect(() => {
		if (isGridVisible) {
			drawGrid();
		}
	}, []);

	useEffect(() => {
		if (isGridVisible) {
			drawGrid();
		} else {
			clearCanvas();
		}

		if (blocksResult.length > 0) {
			if (isBlockImage) {
				drawResultWithImage();
			} else {
				drawResult();
			}
		}

		setImageCanvasDataString(imageCanvasRef.current!.toDataURL('image/png'));
	}, [blocksResult, isGridVisible, isBlockImage]);

	return (
		<div className={styles.container}>
			<SectionSubHeader>Image Result</SectionSubHeader>
			<Paragraph>
				When an image is downloaded, it will consistently position the structure
				at the center and incorporate the same texture as demonstrated here.
			</Paragraph>
			<div className={styles.header}>
				<Paragraph>
					<strong>Settings</strong>:
				</Paragraph>
				<div className={styles.fieldGroup}>
					<input
						type='checkbox'
						name='toggle-grid'
						id='toggle-grid'
						checked={isGridVisible}
						onChange={(event) => setIsGridVisible(event.target.checked)}
					/>
					<label htmlFor='toggle-grid'>Toggle Grid</label>
				</div>
				{blocksResult.length !== 0 && (
					<div className={styles.fieldGroup}>
						<input
							type='checkbox'
							name='toggle-block'
							id='toggle-block'
							checked={isBlockImage}
							onChange={(event) => setIsBlockImage(event.target.checked)}
						/>
						<label htmlFor='toggle-block'>Toggle Block Image</label>
					</div>
				)}
			</div>
			<div className={styles.canvasContainer}>
				<canvas ref={canvasRef} className={styles.area}></canvas>
			</div>
			{blocksResult.length !== 0 && (
				<div className={styles.actions}>
					<a
						className={styles.standardBtn}
						href={imageCanvasDataString}
						download={`result_${String(fileCounter).padStart(2, '0')}.png`}
					>
						Download image
					</a>
				</div>
			)}
			<div className={styles.imageCanvasContainer}>
				<canvas ref={imageCanvasRef} className={styles.imageArea}></canvas>
			</div>
		</div>
	);
}
