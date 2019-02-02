import Level from './Level';
import DOMDisplay from './DOMDisplay';

const arrowCodes = {
    37: "left",
    38: "up",
    39: "right"
};

function trackKeys(codes) {
    const pressed = Object.create(null);

    function handler(event) {
        if (codes.hasOwnProperty(event.keyCode)) {
            const down = event.type === "keydown";
            pressed[codes[event.keyCode]] = down;
            event.preventDefault();
        }
    }

    addEventListener("keydown", handler);
    addEventListener("keyup", handler);

    return pressed;
}

function runGame() {
    const pressed = Object.create(null);

    function handler(event) {
        if (codes.hasOwnProperty(event.keyCode)) {
            const down = event.type === "keydown";
            pressed[codes[event.keyCode]] = down;
            event.preventDefault();
        }
    }
    addEventListener("keydown", handler);
    addEventListener("keyup", handler);
    return pressed;
}

function runAnimation(frameFunc) {
    let lastTime = null;

    function frame(time) {
        let stop = false;
        if (lastTime !== null) {
            const timeStep = Math.min(time - lastTime, 100) / 1000;
            stop = frameFunc(timeStep) === false;
        }

        lastTime = time;
        if (!stop) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}

const arrows = trackKeys(arrowCodes);

function runLevel(level, Display, andThen) {
    const display = new Display(document.body, level);

    runAnimation(function(step) {
        level.animate(step, arrows);
        display.drawFrame(step);
        if (level.isFinished()) {
            display.clear();

            if (andThen) andThen(level.status);
            return false;
        }
    });
}

export default function runGame(plans, Display) {
    function startLevel(n) {
        runLevel(new Level(plans[n]), Display, function(status) {
            if (status === "lost") startLevel(n);
            else if (n < plans.length - 1) startLevel(n + 1);
            else console.log("You win!");
        });
    }

    startLevel(0);
}