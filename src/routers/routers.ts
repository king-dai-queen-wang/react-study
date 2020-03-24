import {Home} from "../pages/home/Home";
import {Test} from "../pages/home/test/Test";
import {Game} from "../pages/games/components/game/Game";
import {Clock} from "../pages/clock/Clock";
import {RouterModel} from "../model";
import {Antd} from "../pages/antd/Antd";
import {TodoList} from "../pages/todoList/TodoList";

export const routers: RouterModel[] = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            {
                path: '/test',
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
        path: '/todoList',
        name: 'todoList',
        component: TodoList,
        children: [
            {
                path: '/test2',
                name: 'test2',
                component: Test,
                children: [
                    {
                        path: '/test3',
                        name: 'test3',
                        component: Clock
                    }
                ]
            }
        ]
    }, {
        path: '/antd',
        name: 'antd',
        component: Antd,
    }
];
