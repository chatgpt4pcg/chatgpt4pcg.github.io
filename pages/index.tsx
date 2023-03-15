import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>
					ChatGPT4PCG: Character-like Level Generation for Science Birds
				</title>
				<meta
					name='description'
					content='The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main className={styles.main}>
        <h1>ChatGPT4PCG: Character-like Level Generation for Science Birds</h1>
				<img
					src='logo.png'
					alt='Competition logo'
				/>
				<h2 id='organizers'>Organizers</h2>
				<ol>
					<li>
						Pittawat Taveekitworachai, Graduate School of Information Science
						and Engineering, Ritsumeikan University
					</li>
					<li>
						Febri Abdullah, Graduate School of Information Science and
						Engineering, Ritsumeikan University
					</li>
					<li>
						Mury F. Dewantoro, Graduate School of Information Science and
						Engineering, Ritsumeikan University
					</li>
					<li>
						Ruck Thawonmas, College of Information Science and Engineering,
						Ritsumeikan University
					</li>
				</ol>
				<h2 id='description-of-the-competition'>
					Description of the Competition
				</h2>
				<p>
					The 1st ChatGPT4PCG Competition challenges participants to utilize the
					state-of-the-art natural language processing tool, ChatGPT, to
					generate visually appealing and structurally sound levels for Science
					Birds, an Angry Birds clone created for research purposes.
				</p>
				<p>
					As a participant, your goal is to create a prompt that instructs
					ChatGPT to generate a level in Science Birds that resembles an English
					character while ensuring that the level is stable and able to
					withstand gravity. You are encouraged to use various prompt
					engineering techniques to develop the most effective prompt possible.
				</p>
				<p>
					To participate, you must submit your prompt along with instructions on
					how to generate various character levels. We will then generate a
					number of samples, each of which will undergo rigorous testing for
					stability and similarity. Stability will be evaluated by loading the
					level in Science Birds and ensuring that there is no movement for a
					duration of 10 seconds. The similarity of each generated level to its
					corresponding English character will be determined using a
					state-of-the-art optical character recognition (OCR) model.
				</p>
				<p>
					This competition offers a unique opportunity for the best prompt
					engineers from around the world to showcase their creativity and
					skills. Join us in this exciting challenge to push the boundaries of
					natural language processing and procedural content generation!
				</p>
				<h2 id='contact'>Contact</h2>
				<p>Email address: <a href="mailto:chatgpt4pcg@gmail.com">chatgpt4pcg@gmail.com</a></p>
				<h2 id='submission-deadline'>Submission deadline</h2>
				<p>???</p>
				<h2>Tools</h2>
				<p>TBA</p>
				<h2 id='other-information'>Other information</h2>
				<p>
					Keywords: ChatGPT, prompt engineering, procedural content generation,
					level generation, conversational, dialogue agent, large language model
				</p>
				<p>Programming languages: N/A</p>
				<p>Complexity: Low-Medium</p>
				<p>Competitive: New Competition</p>
				<p>Barrier of entry: Low</p>
			</main>
		</>
	);
}
