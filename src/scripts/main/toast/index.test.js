import React from "react";
import ReactDOM from "react-dom";
import toast from "./index";

describe("scripts: toast", () => {
    jest.useFakeTimers();

    beforeEach(() => {
        jest.runAllTimers();
        ReactDOM.unmountComponentAtNode(div);
    });

    const div = document.createElement("div");

    document.body.appendChild(div);

    const Sheet = () => (
        <div className="sheet" id="demo-sheet">
            <section>
                <p>Some content</p>
            </section>
        </div>
    );

    it("is defined", () => {
        expect(toast).toBeDefined();
        expect(toast).toBeInstanceOf(Function);
    });

    it("create simple toast with text only", () => {
        toast({ html: "Test" });

        const toastContainer = document.getElementById("toast-container");
        const toastContent = toastContainer.querySelector(".toast-content");

        expect(toastContainer).toBeDefined();
        expect(toastContent).toBeDefined();
        expect(toastContent.innerHTML).toEqual("Test");
    });

    it("create a toast with html content", () => {
        toast({ html: "<h1>Test</h1>" });

        const toastContainer = document.getElementById("toast-container");
        const toastH1 = toastContainer.querySelector("h1");

        expect(toastContainer).toBeDefined();
        expect(toastH1).toBeDefined();
        expect(toastH1.innerHTML).toEqual("Test");
    });

    it("create a toast custom class", () => {
        toast({
            html: "Test",
            classes: ["test"]
        });

        const renderedToast = document.querySelector(".toast");

        expect(renderedToast).toBeDefined();
        expect(renderedToast.classList).toContain("test");
    });

    it("closes a dismissable toast when clicking the close icon", () => {
        toast({ html: "Test" });

        const renderedToast = document.querySelector(".toast");
        const closeIcon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(closeIcon).toBeDefined();

        closeIcon.click();
        expect(document.querySelector(".toast")).toBeNull();
    });

    it("does not add a close icon when dismissable is set to false", () => {
        toast({
            html: "Test",
            dismissable: false
        });

        const renderedToast = document.querySelector(".toast");
        const closeIcon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(closeIcon).toBeNull();
    });

    it("creates correct toast when type is set to success", () => {
        toast({
            html: "Test",
            type: "success"
        });

        const renderedToast = document.querySelector(".toast.toast-success");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("check_circle");
    });

    it("creates correct toast when type is set to neutral", () => {
        toast({
            html: "Test",
            type: "neutral"
        });

        const renderedToast = document.querySelector(".toast.toast-neutral");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("info");
    });

    it("creates correct toast when type is set to warning", () => {
        toast({
            html: "Test",
            type: "warning"
        });

        const renderedToast = document.querySelector(".toast.toast-warning");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("warning");
    });

    it("creates correct toast when type is set to danger", () => {
        toast({
            html: "Test",
            type: "danger"
        });

        const renderedToast = document.querySelector(".toast.toast-danger");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("error");
    });

    it("adds a custom icon when type is not set", () => {
        toast({
            html: "Test",
            icon: "android"
        });

        const renderedToast = document.querySelector(".toast");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("android");
    });

    it("does not add a custom icon when type is not set", () => {
        toast({
            html: "Test",
            type: "neutral",
            icon: "android"
        });

        const renderedToast = document.querySelector(".toast.toast-neutral");
        const icon = renderedToast.querySelector("i.material-icons");

        expect(renderedToast).toBeDefined();
        expect(icon).toBeDefined();
        expect(icon.innerHTML).toEqual("info");
    });

    it("does not disappear on mouseover", () => {
        toast({ html: "Test" });

        const renderedToast = document.querySelector(".toast");

        expect(renderedToast).toBeDefined();

        // Simulate mouseenter
        const e = new Event("mouseenter");

        renderedToast.dispatchEvent(e);
        jest.runAllTimers();

        expect(document.querySelector(".toast")).toBeDefined();
    });

    it("resets timer on mouseleave", () => {
        toast({ html: "Test" });

        const renderedToast = document.querySelector(".toast");

        expect(renderedToast).toBeDefined();

        // Simulate mouseenter
        let e = new Event("mouseenter");

        renderedToast.dispatchEvent(e);
        jest.runAllTimers();

        expect(document.querySelector(".toast")).toBeDefined();

        // Simulate mouseleave
        e = new Event("mouseleave");

        renderedToast.dispatchEvent(e);
        jest.runAllTimers();

        expect(document.querySelector(".toast")).toBeNull();
    });

    it("runs a given function after timer expires", () => {
        const testFunc = jest.fn();

        toast({
            html: "hello",
            completeCallback: testFunc
        });

        expect(testFunc).not.toHaveBeenCalled();

        jest.runAllTimers();

        expect(testFunc).toHaveBeenCalled();
    });

    it("adds margin-right to toast-container if a sheet is open", () => {
        ReactDOM.render(<Sheet />, div);
        document.querySelector("body").classList.add("sheet-open");
        toast({ html: "Test" });

        const renderedToast = document.querySelector("#toast-container");

        expect(renderedToast).toBeTruthy();
        expect(Object.keys(renderedToast.style._values)).toContain("margin-right");
    });
});
