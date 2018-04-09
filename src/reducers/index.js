import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { contests, contestsHasErrored, contestsIsLoading } from './contests';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    contests,
    contestsHasErrored,
    contestsIsLoading
});
