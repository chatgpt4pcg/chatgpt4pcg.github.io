# The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds

![Logo](https://github.com/chatgpt4pcg/chatgpt4pcg.github.io/raw/main/public/logo.png)

The 1st ChatGPT4PCG Competition challenges participants to utilize the state-of-the-art natural language processing tool, ChatGPT, to generate visually appealing and structurally sound levels for Science Birds, an Angry Birds clone created for research purposes.

As a participant, your goal is to create a prompt that instructs ChatGPT to generate a level in Science Birds that resembles an English capital letter while ensuring that the level is stable and able to withstand gravity. You are encouraged to use various prompt engineering techniques to develop the most effective prompt possible.

To participate, you must submit your prompt according to our guidelines. We will then generate a number of samples, each of which will undergo rigorous testing for stability and similarity. Stability will be evaluated by loading the level in Science Birds and ensuring that there is no movement for a duration of 10 seconds. The similarity of each generated level to its corresponding English character will be determined using an open-source optical character recognition (OCR) model. The stability testing system and the instructions to use the OCR model, as well as all the relevant tools, will be provided

This competition offers a unique opportunity for the best prompt engineers from around the world to showcase their creativity and skills. Join us in this exciting challenge to push the boundaries of prompt engineering and procedural content generation!

## Organizers

1. Pittawat Taveekitworachai, Graduate School of Information Science and Engineering, Ritsumeikan University
2. Febri Abdullah, Graduate School of Information Science and Engineering, Ritsumeikan University
3. Mury F. Dewantoro, Graduate School of Information Science and Engineering, Ritsumeikan University
4. Ruck Thawonmas, College of Information Science and Engineering, Ritsumeikan University
5. Julian Togelius, NYU Tandon School of Engineering, New York University
6. Jochen Renz, School of Computing, The Australian National University

# Contact

Email address: chatgpt4pcg@gmail.com

# Submission

To submit your prompt, send us __two__ `.txt` files.

The first file should only contain the prompt, and should be named after your team using this convention `<TEAM_NAME>.txt`.  For example, `team1.txt`. The example of content in this file is as follows:

```
Use `ab_drop()` function to generate a stable structure that looks like the <OBJECT>—the goal. Dropping position and order are crucial.

1. Definitions
Slots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.
Layers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.
Base: The bottom of the map, i.e., layer 0.

2. Environment
There are three block types as follows:
b11, a square block whose width is 1 unit and height is 1 unit
b31, a horizontal block whose width is 3 units and height is 1 unit
b13, a vertical block whose width is 1 unit and height is 3 units

3. Tool
Use the `ab_drop()` function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.
```

The second file should contain the full names of all team members and their affiliations, also named after your team using this convention `<TEAM_NAME>_members.txt`. For example, `team1_members.txt`. The example of content in this file is as follows:

```
John Doe, Imaginary Unicorn University
Jane Doe, Imaginary Unicorn University
```

Both files should be emailed to `chatgpt4pcg@gmail.com` with the subject `2023 ChatGPT4PCG - <TEAM_NAME>`. Please ensure that your team name is consistent throughout both files. If you have any questions, please contact us at the provided email address.

# Submission deadline

Midterm: 19 May 2023 (23:59 JST)

Final: 20 May 2023 - 21 July 2023 (23:59 JST) (No extension)

# Other information

Keywords: ChatGPT, prompt engineering, procedural content generation, level generation, conversational agent, large language model

Programming languages: N/A. However, having general programming knowledge can be useful.

Complexity: Low-Medium

Competitive: New Competition

Barrier of entry: Low
