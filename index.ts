import {
    toHaveBeenRendered,
    toHaveBeenRenderedTimes,
    toHaveBeenRenderedWith,
    toHaveBeenNthRenderedWith,
} from './lib/extensions'
import mockComponent, { ComponentMock } from './lib/mock-component'
import fireCallback from './lib/fire-callback'

declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveBeenRendered(): R
            toHaveBeenRenderedTimes(calls: number): R
            toHaveBeenRenderedWith<TProps = any>(expectedProps: TProps): R
            toHaveBeenNthRenderedWith<TProps = any>(
                call: number,
                expectedProps: TProps
            ): R
        }
    }
}

expect.extend({
    toHaveBeenRendered,
    toHaveBeenRenderedTimes,
    toHaveBeenRenderedWith,
    toHaveBeenNthRenderedWith,
})

export { mockComponent, fireCallback }
export type { ComponentMock }
