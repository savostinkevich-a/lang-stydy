import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react';
import AppHeader from "./AppHeader";

const AppLayout: FC<TAppLayout> = (
    {
        headerTitle,
        children
    }): JSX.Element => {
    return (
        <>
            <AppHeader headerTitle={headerTitle}/>
            <main style={{
                marginTop: 72
            }}>
                {children}
            </main>
        </>
    );
};

export default AppLayout;

type TAppLayout = {
    headerTitle: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;