import axios from 'axios';
export default class PopupService {
    async getPopupList(titl, sdate, edate) {
        return await axios
            .post(`/admin/popUpSetting`, {
                title:titl,
                startDate: sdate,
                endDate: edate,
                // sortBy: 'id',
                // sortOrder: 'desc',
            })
            .then((res) => res.data.data.popUpSettings);
    }
    async changeSwitchValue(ids) {
        return await axios.post(`/admin/popUpSetting/activate-deactivate`, { id: ids }).then((res) => res);
    }
    async viewPopup(ids) {
        return await axios.post(`/admin/popUpSetting/view`, { id: ids }).then((res) => res.data.data[0]);
    }
    async editPopup(titl, stat, type, desc, ids, sdate, edate) {
        return await axios.put(`/admin/popUpSetting/edit`, {
            id: ids,
            title: titl,
            description: desc,
            status: stat,
            popupType: type,
            periodStartDate: sdate,
            periodEndDate: edate
        }).then((res) => res);
    }

}
