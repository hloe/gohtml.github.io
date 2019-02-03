import Level from './Level';

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

function runAnimation(frameFunc) {
    let lastTime = null;

    function frame(time) {
        let stop = false;

        if (lastTime !== null) {
            const timeStep = Math.min(time - lastTime, 100) / 1000;
            stop = !stop && frameFunc(timeStep) === false;
        }

        lastTime = time;
        if (!stop) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}


function runLevel(level, Display, andThen) {
    const display = new Display(document.body, level);
    let onPause = false;

    const arrows = trackKeys(arrowCodes);

    runAnimation(function(step) {
        if (!onPause) {
            level.animate(step, arrows);
            display.drawFrame(step);

            if (level.isFinished()) {
                display.clear();

                if (andThen) andThen(level.status);
                return false;
            }
        }
    });

    function handler(event) {
        if (event.key === 'Escape') onPause = !onPause;
    }

    addEventListener("keyup", handler);
}

export default function runGame(plans, Display) {
    let lives = 3;

    function startLevel(n) {
        runLevel(new Level(plans[n]), Display, function(status) {
            if (status === "lost") {
                lives--;

                if (lives) {
                    startLevel(n);
                } else {
                    alert("Game over!");
                    lives = 3;
                    startLevel(0);
                }
            }
            else if (n < plans.length - 1) startLevel(n + 1);
            else alert("You win!");
        });
    }

    startLevel(0);
}