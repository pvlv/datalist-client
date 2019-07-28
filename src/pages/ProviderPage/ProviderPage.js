import React, { useEffect, useState, useCallback } from 'react';

import { ServiceContext } from '../../services';
import { useService } from '../../hooks';
import { Spinner, ModalSucces } from '../../components';
import ProviderForm from './ProviderForm';
import { StatusPage } from '../StatusPage';

const delay = (ms = 2000) => new Promise(res => setTimeout(res, ms));
const addProviderDataMock = formData => Promise.resolve(formData);

export function ProviderPage() {
  // const { api } = useService(ServiceContext);
  // const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  // const [showModal, setModalShow] = useState(false);
  // const [formData, handleClickSubmit] = useState(null);

  // const handleSubmit = useCallback(({ formData }) => {
  //   handleClickSubmit(formData);
  // }, []);

  // const handleModalShow = useCallback(() => {
  //   setModalShow(false);
  //   handleClickSubmit(null);
  // }, []);

  // // fixme
  // api.addProviderData = addProviderDataMock;

  // const addProviderData = async formData => {
  //   try {
  //     const res = await api.addProviderData(formData);
  //     console.log(res);
  //     await delay(1000);
  //     setLoading(false);
  //     setSuccess(true);
  //     setModalShow(true);
  //   } catch (e) {
  //     setError(true);
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   if (formData === null) {
  //     return;
  //   }
  //   setLoading(true);
  //   (async () => await addProviderData(formData))();
  // }, [formData]);

  // if (error) {
  //   return <StatusPage error={error} />;
  // }

  return (
    <iframe
      src="http://detalist.izzz.io/front/add.html"
      height="1000px"
      width="1000px"
    >
      iframe
    </iframe>
  );
}
