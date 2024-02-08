# The 2nd ChatGPT4PCG Competition: Character-like Level Generation for Science Birds

![image](https://github.com/chatgpt4pcg/chatgpt4pcg.github.io/blob/main/public/images/logo.jpg?raw=true)

The 2nd ChatGPT4PCG Competition continues the challenging and exciting spirit of the first competition. In this edition, we not only challenge participants to come up with a prompt to construct stable Science Birds levels resembling uppercase English characters, but we also open up the possibility of incorporating more complex prompt engineering techniques. This time, we allow the submission of a program in which participants can build on top of our examples and packages, enabling the use of conditions and iterations in programming to develop their own advanced prompt engineering techniques, and potentially create new ones!

We welcome participants of all levels, whether you only modify a prompt in a provided example or come up with a complex logic through prompt engineering. All programs will be inspected for qualification, subject to the competition rules, and used to generate levels for each target English uppercase character. The generated levels are then tested for stability using our Science Birds Evaluator and checked for similarity to respective target characters using an upgraded Vision Transformer (ViT) classifier. This edition also introduces a new metric--diversity, making it more challenging. Now, not only do the prompts and/or prompt engineering techniques developed by participants need to generate stable and similar levels, but they also need to generate diverse levels.

To participate, you must submit your prompt according to our guidelines. We will then generate a number of samples, each of which will undergo rigorous testing for stability, similarity, and diversity. Stability will be evaluated by loading the level in Science Birds and examining the ratio of unmoved blocks after 10 seconds of the initialization. The similarity of each generated level to its corresponding English character will be determined using an open-source ViT-based classifier model. The stability testing system and the instructions to use the classifier model, as well as all the relevant tools, will be provided. The newly introduced diversity is assessed by averaging the distances of unordered pairs of output vectors from the ViT classifier across trials, all pertaining to the same target character and prompt.

We hope that this edition will be more exciting and contribute to collective learning and discovery in the world of prompt engineering through this game competition!

> __To obtain more information about the competition, please do not hesitate to visit our website, where you can find detailed information and updates regarding the event.__

## Submission deadline

Midterm: 24 May 2024 (23:59 JST)

Final: 26 July 2024 (23:59 JST)

Midterm submission is optional, although we recommend it. Any team that submits during the mid-term submission will be notified of the preliminary results. However, all teams, whether they submit during the midterm or not, must submit during the final submission period. Only submissions during the final submission period will be considered for the final ranking.

## Contact

Email address: <chatgpt4pcg@gmail.com>