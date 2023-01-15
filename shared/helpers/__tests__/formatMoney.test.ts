import { formatMoney } from "../formatMoney";

describe('formatMoney', () => {
    it('returns the formatted budget', () => {
        expect(formatMoney(460000000)).toBe('$460,000,000')
    })
})