# CSS Review Readme

This readme provides a detailed explanation of the CSS code that will be reviewed with students. It describes the structure and styling of the code, highlighting important elements and their functionalities.

## Topics we will cover
- [Flex Box](#card-container)
- [Card Flipping on Hover](#card-flip-on-hover)
- [Loading Symbol Animation](#loading-symbol-animation)

1. First, we will learn how to set up a flexbox container with cards, providing a comprehensive explanation of targeting specific child elements using pseudo-class selectors. You will understand how to style elements based on their positions within the parent container, such as odd numbers, specific starting or ending elements, or even elements.

2. `If time permits`, we will delve into a  card flipping animation that reveals different types of information when the card is hovered over. This animation adds an interactive element to the cards, showcasing their versatility and dynamic nature.

3. Lastly, we will explore a straightforward  loading animation. This animation provides a visual cue to indicate that content is being loaded, adding a touch of professionalism and user-friendly feedback to your webpage. `Note we will not go into the logic of the animation since that would require a bit of javascript`

Once we finish, I will make sure to provide the code in the live-activities channel. 


## Flex Box

The `.card-container` class is responsible for displaying a flex container with cards. It has the following properties:

- `display: flex;` enables a flex layout for the container.
- `flex-wrap: wrap;` allows the cards to wrap onto multiple lines.
- `background-color: rgb(48, 191, 235);` sets the background color of the container to a light blue shade.
- `padding: 1em;` adds padding around the container.
- `text-align: center;` centers the text content within the container.

The `.card-container>div` selector targets the child `div` elements within the container. 

The `div:nth-child(odd)` selector targets the odd-numbered cards within the container. 

The `div:nth-child(-n+3)` selector targets the first three cards within the container. 

The `div:hover` selector targets the cards when they are hovered over by the user.

The `div:nth-child(even):hover` selector targets the even-numbered cards within the container when they are hovered over. 

---

## Card Flipping on Hover

The `#inner-card` selector is used to apply a flip animation to the last card in the container when hovered over. It has the following properties:

- `transition: transform 0.8s;` adds a smooth transition effect with a duration of 0.8 seconds when the card is flipped.

The `.card-container div:nth-last-child(1):hover #inner-card` selector targets the last card in the container when it is hovered over. The `transform: rotateY(180deg);` property applies a 3D rotation to flip the card horizontally.

The `#identity, #stats` selectors are used to position the content of the card. The `position: absolute;` property keeps the content in one space, and `backface-visibility: hidden;` ensures that the back face of the flipped card is not visible.

The `#stats` selector applies a `transform: rotateY(180deg);` property to flip the card's stats section to the front when the card is hovered over.

---

## Loading Symbol Animation

The `.box` class represents the main loading box.

The `animation-name: turn;` property applies a rotation animation named `turn`.
The `animation-delay: 2s;` property adds a delay of 2 seconds before the animation starts.
The `animation-duration: 2s;` property sets the duration of the animation to 2 seconds.
The `animation-iteration-count: infinite;` property makes the animation repeat infinitely.

The `@keyframes turn` rule defines the animation's keyframes. It rotates the element from 0 to 90 degrees.

