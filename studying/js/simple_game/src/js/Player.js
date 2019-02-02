import Vector from './Vector';

export default class Player {
    constructor(pos) {
        this.pos = pos.plus(new Vector(0, -0.5));
        this.size = new Vector(0.8, 1.5);
        this.speed = new Vector(0, 0);
    }

    get type() {
        return "player";
    }

    moveX(step, level, keys) {
        const playerXSpeed = 7;

        this.speed.x = 0;

        if (keys.left) this.speed.x -= playerXSpeed;
        if (keys.right) this.speed.x += playerXSpeed;

        const motion = new Vector(this.speed.x * step, 0);
        const newPos = this.pos.plus(motion);

        const obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle) level.playerTouched(obstacle);
        else this.pos = newPos;
    }

    moveY(step, level, keys) {
        const gravity = 30;
        const jumpSpeed = 17;

        this.speed.y += step * gravity;

        const motion = new Vector(0, this.speed.y * step);
        const newPos = this.pos.plus(motion);

        const obstacle = level.obstacleAt(newPos, this.size);
        if (obstacle) {
            level.playerTouched(obstacle);
            if (keys.up && this.speed.y > 0) this.speed.y = -jumpSpeed;
            else this.speed.y = 0;
        } else {
            this.pos = newPos;
        }
    }

    act(step, level, keys) {
        this.moveX(step, level, keys);
        this.moveY(step, level, keys);

        const otherActor = level.actorAt(this);
        if (otherActor) level.playerTouched(otherActor.type, otherActor);

        // Losing animation
        if (level.status === "lost") {
            this.pos.y += step;
            this.size.y -= step;
        }
    }

    playerTouched(type, actor) {
        if (type === "lava" && this.status === null) {
            this.status = "lost";
            this.finishDelay = 1;
        } else if (type === "coin") {
            this.actors = this.actors.filter(function(other) {
                return other !== actor;
            });
            if (!this.actors.some(function(actor) {
                return actor.type === "coin";
            })) {
                this.status = "won";
                this.finishDelay = 1;
            }
        }
    }
}
