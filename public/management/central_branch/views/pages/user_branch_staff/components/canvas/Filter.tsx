import React from 'react';
import { createPortal } from 'react-dom';
import DateEl from '../../../../components/DateEl';
import { RootState, useAppDispatch } from '../../../../../store';
import storeSlice from '../../config/store';
import { initialState } from '../../config/store/inital_state';
import { useSelector } from 'react-redux';
import setup from '../../config/setup';
export interface Props {}

const modalRoot = document.getElementById('filter-root');

const Filter: React.FC<Props> = (props: Props) => {
    const state: typeof initialState = useSelector(
        (state: RootState) => state[setup.module_name],
    );

    const dispatch = useAppDispatch();

    function get_start_date(data: string): void {
        console.log(data);
    }

    function close_filter(action: boolean = true) {
        dispatch(storeSlice.actions.set_show_filter_canvas(action));
    }

    if (modalRoot && state.show_filter_canvas) {
        return createPortal(
            <div className="off_canvas data_filter">
                <div className="off_canvas_body">
                    <div className="header">
                        <h3 className="heading_text">Filter</h3>
                        <button
                            className="close_button"
                            onClick={() => close_filter(false)}
                        >
                            x
                        </button>
                    </div>

                    <div className="content">
                        <div className="filter_item">
                            <label htmlFor="start_date">Start Date</label>
                            <DateEl
                                value={''}
                                name={'start_date'}
                                handler={get_start_date}
                            ></DateEl>
                        </div>
                    </div>
                </div>
                <div className="off_canvas_overlay"></div>
            </div>,
            modalRoot,
        );
    } else {
        return <></>;
    }
};

export default Filter;
