import { Sidebar } from 'lucide-react'
import React from 'react'
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from './ui/sidebar'

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader >
                adsf asdfas 
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup />
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar