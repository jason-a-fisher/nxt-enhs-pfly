import * as React from 'react';
import { useSession, getSession } from "next-auth/react"

import {
    Page,
    Masthead,
    MastheadToggle,
    MastheadMain,
    MastheadBrand,
    MastheadContent,
    PageSidebar,
    PageSection,
    PageSectionVariants,
    PageToggleButton,
    Toolbar,
    ToolbarContent,
    ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

interface LayoutProps {
    children: React.ReactNode
}

const MainLayout_01:  React.FunctionComponent = (children: LayoutProps) => {
    const { data: session, status } = useSession();
    const isNavOpen: boolean = true;
    const onNavToggle: boolean = false;

    const headerToolbar = (
        <Toolbar id="toolbar">
            <ToolbarContent>
                <ToolbarItem>header-tools</ToolbarItem>
            </ToolbarContent>
        </Toolbar>
    );

    const Header = (
        <Masthead>
            <MastheadToggle>
                <PageToggleButton
                    variant="plain"
                    aria-label="Global navigation"
                    isNavOpen={ isNavOpen }
                >
                    <BarsIcon />
                </PageToggleButton>
            </MastheadToggle>
            <MastheadMain>
                <MastheadBrand href="https://patternfly.org" onClick={() => console.log('clicked logo')} target="_blank">
                    Logo
                </MastheadBrand>
            </MastheadMain>
            <MastheadContent>{headerToolbar}</MastheadContent>
        </Masthead>
    );

    const Sidebar = <PageSidebar nav="Navigation" isNavOpen={ isNavOpen } />;

    return (
        <Page header={Header} sidebar={Sidebar}>
            <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
            <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
            <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
        </Page>
    );
}

export { MainLayout_01 }