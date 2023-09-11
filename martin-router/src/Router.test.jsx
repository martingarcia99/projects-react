import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { Router } from "./Router";
import { getCurrentPath } from "./utils";
import { Link } from "./Link";
import { Route } from "./Route";
import { waitFor } from "@testing-library/react";

vi.mock('./utils.js', () => ({
    getCurrentPath: vi.fn()
}))

describe('Router', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })
    it('should render without problems', () => {
        render(<Router routes={[]} />)
        expect(true).toBeTruthy()
    })

    it('should render 404 if no routes match', () =>{
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>}/>)
        expect(screen.getByText('404')).toBeTruthy()
    })

    it('should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about')
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ]

        render(<Router routes={routes} />)
        expect(screen.getByText('About')).toBeTruthy()
    })

    it('should navigate using Links', () => {
        getCurrentPath.mockReturnValueOnce('/')

        render(
            <Router>
                <Route path='/' Component={() => {
                    return (
                        <>
                            <Link to='/about'>Go to About</Link>
                        </>
                    )
                }} />
                <Route path='/about' Component={() => <h1>About</h1>} />
            </Router>
        )
        
        //Check on the link
        const button = screen.getByText(/Go to About/)
        fireEvent.click(button)

        waitFor(() => screen.findByText('About'))

        //Check that the new route is rendered
        expect(screen.getByText('About')).toBeTruthy()


    })
})