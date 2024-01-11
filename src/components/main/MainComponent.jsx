import React, { useState } from 'react'
import HeaderComponent from '../UI/Header/HeaderComponent'
import SummeryComponent from '../UI/Summery/SummeryComponent'
import ProductList from '../Products/ProductList/ProductList'
import ModalComponent from '../UI/Modal/ModalComponent'

const MainComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = (value) => {
        setIsModalOpen(value)
    }
    return (
        <div>
            {
                isModalOpen && (
                    <ModalComponent handleModal={handleModal} />
                )
            }
            <HeaderComponent handleModal={handleModal} />
            <SummeryComponent />
            <ProductList />
        </div>
    )
}

export default MainComponent