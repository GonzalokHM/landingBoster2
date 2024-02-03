/**
 * @vitest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import {describe, expect, test} from 'vitest';

import Header from '../components/Header.jsx'

describe('Header',()=>{
    test('Logo should containt the correct alt text', ()=>{
        render(<Header/>)
        expect(screen.getByRole('img')).toHaveAttribute('alt','booster icon')
    })
})