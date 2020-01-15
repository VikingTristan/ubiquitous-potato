import React, { Component } from "react";
import PrismCode from "react-prism";

import { ComponentPreview, DocContainer, Property, JavascriptDocs, DgScript, Attribute } from "@docutils";
import TabsComponent from "@components/Tabs";

const { tabs } = window.dg;

const tabItems = ["Card", "Discounts", "Transactions", "Invoice", "Settings", "Audit trail", "History"];

const BasicUsage = () => (
    <>
        <h2 id="basic-usage">Basic usage</h2>
        <p>Add class <Property value=".tabs" /> to a div containing <PrismCode className="language-html">{"<ul>"}</PrismCode>and nest <PrismCode className="language-html">{"<li>"}</PrismCode> as needed.
        Make sure that the tabs will not overflow on screens of normal size.
        Consider revising the design or the decision to use tabs when more than 3
        alternatives are present. If using tabs really is necessary, tabs with scroll might be
        a more suitable alternative.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent id="tabs-example" items={[...tabItems.slice(0, 3)]}/>
        </ComponentPreview>
    </>
);

const TabsScroll = () => (
    <>
        <h2 id="tabs-scroll">Tabs with scroll</h2>
        <p>To make tabs more mobile friendly, use class <Property value=".tabs-scroll" />.
            <Property value=".tabs-scroll" /> will make the tabs scrollable in case of overflow.
        Note that the scrollable property is not optimized for desktop usage. Consider the usage
        when 4 or more tabs are present.</p>
        <ComponentPreview language="html" showCasePanel codeFigure>
            <TabsComponent id="tabs-scroll-example" ulId="tabs-scroll-example-ul" items={tabItems} scroll/>
        </ComponentPreview>
    </>
);

const SetScrollStateJavaScript = ({ componentName }) => (
    <>
        <tr>
            <td scope="row"><DgScript component={componentName} func="setScrollState" params={[`<${componentName.toLowerCase()}-id>`, "scrollState"]} /></td>
            <td>
                Moves the scroll position of the {componentName} to the user specified position. The value to be passed to <Attribute name="scrollState" /> is
                the object <Attribute name="{ scrollStart, scrollTotalAmount }" />. <Attribute name="scrollStart" /> is the current scroll
                position, <Attribute name="scrollTotalAmount" /> is the amount to be scrolled from the current scroll position (negative values for left scroll,
                positive values for right scroll). Note: <PrismCode className="language-html">{"<ul>"}</PrismCode> is the scrollable element.
            </td>
        </tr>
    </>
);

const JavascriptMethods = () => (
    <>
        <h2 id="javascript-methods">JavaScript methods</h2>
        <JavascriptDocs componentName="tabs" others={[SetScrollStateJavaScript]} />
    </>
);

class Tabs extends Component {
    componentDidMount () {
        tabs.init();
    }

    render () {
        return (
            <DocContainer docToc>
                <p className="lead">
                    Use tabs to show which page or section that is active out of several options.
                </p>
                <BasicUsage />
                <TabsScroll />
                <JavascriptMethods />
            </DocContainer>
        );
    }
}

export default Tabs;

/* For testing */
export { BasicUsage, TabsScroll, JavascriptMethods };
