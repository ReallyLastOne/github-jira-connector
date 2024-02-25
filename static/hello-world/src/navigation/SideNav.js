import React from 'react';

import WorkIcon from '@atlaskit/icon/glyph/folder';
import CustomerIcon from '@atlaskit/icon/glyph/person';
import QueueIcon from '@atlaskit/icon/glyph/queues';
import SettingsIcon from '@atlaskit/icon/glyph/settings';

import {
    LinkItem,
    NavigationFooter,
    NavigationHeader,
    NestableNavigationContent,
    Section,
    SideNavigation,
} from '@atlaskit/side-navigation';
import AppFrame from './AppFrame';
import SampleFooter from './ProjectFooter';
import ProjectHeader from './ProjectHeader';
import {useTranslation} from "react-i18next";

const SideNav = () => {
    const {t, i18n} = useTranslation();

    return (<AppFrame shouldHideAppBar>
        <SideNavigation label="project" testId="side-navigation">
            <NavigationHeader>
                <ProjectHeader/>
            </NavigationHeader>
            <NestableNavigationContent
                initialStack={[]}
                testId="nestable-navigation-content"
            >
                <Section isList>
                    <LinkItem iconBefore={<QueueIcon label=""/>}>
                        {t("project.tabs.dashboard")}
                    </LinkItem>
                    <LinkItem href="#" iconBefore={<SettingsIcon label=""/>}>
                        {t("project.tabs.settings")}
                    </LinkItem>
                    <LinkItem iconBefore={<WorkIcon label=""/>}>
                        {t("project.tabs.issueAndFields")}
                    </LinkItem>
                    <LinkItem href="#" iconBefore={<CustomerIcon label=""/>}>
                        {t("project.tabs.automation")}
                    </LinkItem>
                </Section>
            </NestableNavigationContent>
            <NavigationFooter>
                <SampleFooter/>
            </NavigationFooter>
        </SideNavigation>
    </AppFrame>);
};

export default SideNav;
