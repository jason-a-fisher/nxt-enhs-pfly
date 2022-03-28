import { NextPage } from "next";
import { MainLayout_01 } from "../../components/MainLayout_01";
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

const DashboardPage: NextPage = () => {
    const { data: session, status } = useSession();
    const loading = status === 'loading';
    const [ content , setContent ] = useState();

    return (
        <MainLayout_01>

        </MainLayout_01>
    )
}

export default DashboardPage