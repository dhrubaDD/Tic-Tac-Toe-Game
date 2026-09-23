# 🎮 Tic Tac Toe

A modern, interactive **Tic Tac Toe** game built using **HTML, CSS, and JavaScript**.

The project features a responsive game interface, player score tracking, light/dark themes, game controls, animations, sound effects, and winning/draw visual effects.

---

## 🚀 Features

* 🎮 Interactive 3×3 Tic Tac Toe game
* 👥 Two-player gameplay
* ❌ Player 1 — X
* ⭕ Player 2 — O
* 🏆 Win detection and winning animations
* 🤝 Draw detection
* 📊 Player score tracking
* 🔄 New Game functionality
* ♻️ Reset Game functionality
* 🌙 Dark Mode
* ☀️ Light Mode
* 🔊 Background music and game sound effects
* 🎉 Confetti effect when a player wins
* ✨ Interactive hover and click animations
* 📱 Responsive layout for different screen sizes
* 🔗 Font Awesome icons for UI elements

---

## 🛠️ Technologies Used

| Technology      | Purpose                                           |
| --------------- | ------------------------------------------------- |
| HTML5           | Structure and game interface                      |
| CSS3            | Styling, responsive design, animations and themes |
| JavaScript      | Game logic and user interaction                   |
| Font Awesome    | Icons                                             |
| Canvas Confetti | Winning celebration effect                        |
| HTML5 Audio     | Background music and sound effects                |

---

## 📂 Project Structure

```text
Tic-Tac-Toe/
│
├── index.html
├── style.css
├── script.js
│
├── tic-tac-toe.png
├── dhruba.png
│
├── pop1.mp3
├── pop2.mp3
├── music1.mp3
├── winner.mp3
├── game start.mp3
├── round winner.mp3
└── draw.mp3
```

---

## 🎯 How to Play

1. Open the game in your browser.
2. Player 1 starts with **X**.
3. Player 2 plays with **O**.
4. Players take turns selecting an empty cell.
5. The first player to get three matching symbols in a row wins.

A winning combination can be:

```text
X | X | X
---------
O | O | X
---------
O |   | O
```

or vertically/diagonally.

If all nine cells are filled without a winner, the round ends in a **draw**.

---

## 🎨 Themes

The game supports two visual themes:

### 🌙 Dark Mode

Uses a dark blue gradient background with contrasting yellow interface elements.

### ☀️ Light Mode

Uses a lighter blue gradient background.

The theme is controlled through the theme button in the top navigation area.

---

## 📊 Score System

The game keeps track of the scores for both players.

```text
Player 1        Player 2
   X               O
   0               0
```

The score is updated when a player wins a round.

---

## 🔊 Sound Effects

The project includes several audio effects for different game events:

* Button/game interaction sounds
* Background music
* Game start sound
* Round winner sound
* Winning sound
* Draw sound

The audio elements are defined directly in `index.html`.

---

## 🎉 Winning Effect

When a player wins, the game provides visual feedback through:

* Winning-cell animation
* Highlighting
* Winning sound
* Confetti effect

The project uses the **Canvas Confetti** library through its CDN integration.

---

## 📱 Responsive Design

The interface is designed to adapt to different screen sizes.

The responsive CSS uses techniques such as:

* Flexbox
* `clamp()`
* `min()`
* `vw` units
* `aspect-ratio`
* CSS media queries

The game board scales according to the available viewport rather than relying solely on a fixed `600px × 600px` size.

Example:

```css
.game-box {
    width: min(80vw, 600px);
    aspect-ratio: 1 / 1;
}
```

This allows the board to remain large on desktop screens while automatically shrinking on smaller devices.

---

## 💻 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tic-tac-toe.git
```

### 2. Navigate to the project

```bash
cd tic-tac-toe
```

### 3. Open the game

Open:

```text
index.html
```

in your browser.

Alternatively, you can use **Live Server** in Visual Studio Code for a better development experience.

---

## 🧠 Project Learning Goals

This project was built to practice and strengthen frontend development concepts including:

* HTML document structure
* CSS Flexbox
* Responsive web design
* CSS animations
* DOM manipulation
* JavaScript event handling
* Game-state management
* Conditional logic
* Score tracking
* Audio integration
* External JavaScript libraries

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* 🤖 Single-player mode with AI
* 🎚️ Difficulty selection
* 👤 Custom player names
* 🏅 Leaderboard
* 🎨 Additional themes
* ⚙️ Game settings panel
* 📱 Improved mobile navigation
* 💾 Persistent scores using Local Storage
* 🌐 Online multiplayer
* 🧠 Smarter AI using the Minimax algorithm

---

## 📸 Screenshots

Add screenshots of your game here:

```markdown
![Tic Tac Toe Screenshot](screenshots/game.png)
```

You can create a `screenshots` folder in the repository and place your screenshots inside it.

---

## 📌 Project Status

**Status:** Completed / In Development

The core two-player Tic Tac Toe experience is implemented, with additional improvements and features possible in future versions.

---

## 👨‍💻 Author

**Dhruba Datta**

Built as a frontend development project to practice HTML, CSS, JavaScript, responsive design, animations, and DOM manipulation.

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.
