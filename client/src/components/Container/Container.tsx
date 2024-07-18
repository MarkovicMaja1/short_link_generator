import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import { serverUrl } from '../../helpers/Constants';
import axios from 'axios';
import DataTable from '../DataTable/DataTable';

interface IContainerProps {
  updateReloadState: () => void;
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const updateReloadState = ():void => {
     setReload(true)
   }
  const [data, setData] = React.useState<UrlData[]>([]);
  const [reload, setReload] = React.useState<boolean>(false)

  const fetchTableData = async () => {
    const response = await axios.get(`${serverUrl}/api/shortUrl`)
    console.log('res', response)
    setData(response.data)
    setReload(false)
  }

  React.useEffect(() => {
    fetchTableData()
  },[reload])

  return(
    <div>
        <FormContainer updateReloadState={updateReloadState}/>
        <DataTable updateReloadState={updateReloadState} data={data} />
    </div>
  ) ;
};

export default Container;
