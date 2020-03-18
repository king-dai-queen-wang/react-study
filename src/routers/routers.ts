import {Home} from "../pages/home/Home";
import {Test} from "../pages/home/test/Test";
import {Game} from "../pages/games/components/game/Game";
import {Clock} from "../pages/clock/Clock";
import {RouterModel} from "../models";
import {Todos} from "../pages/todos/Todos";

export const routers: RouterModel[] = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: 'test',
                name: 'test',
                component: Test
            }
        ]
    }, {
        path: '/game',
        name: 'game',
        component: Game,
    }, {
        path: '/clock',
        name: 'clock',
        component: Clock,
    }, {
        path: '/todos',
        name: 'todos',
        component: Todos,
    }
];
