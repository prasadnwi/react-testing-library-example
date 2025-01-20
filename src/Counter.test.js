import Counter from "./Counter";
import {fireEvent, render} from "@testing-library/react";

describe(Counter,  () => {
    it("counter displays correct initial count", () => {
        const {getByTestId} = render(<Counter initialCount={0} />);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(0);
    });
    it("count should increment by 1 if the increment button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0} />);
        const incrementBtn = getByRole("button", {name: "Increment"})
        fireEvent.click(incrementBtn);

        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).toEqual(1);
        fireEvent.click(incrementBtn);
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(2);
    })
})