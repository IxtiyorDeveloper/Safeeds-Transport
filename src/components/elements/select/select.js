import React, {useMemo, useRef, useState} from 'react';
import {Empty, Select, Spin} from "antd"
import debounce from "lodash/debounce"

function SelectOption({
                          fetchOptions,
                          afterFetch,
                          debounceTimeout = 400,
                          placeholder,
                          setD,
                          setP,
                          type,
                          defaultValue
                      }) {

    const [fetching, setFetching] = useState(false)
    const [options, setOptions] = useState([])
    const fetchRef = useRef(0)
    const [value, setValue] = useState(undefined)

    const debounceFetcher = useMemo(() => {
        const loadOptions = (value = "") => {
            fetchRef.current += 1
            const fetchId = fetchRef.current
            setOptions([])
            setFetching(true)
            fetchOptions(value).then(newOptions => {
                if (fetchId !== fetchRef.current) return
                setOptions(newOptions)
                afterFetch?.(options[0])
                setFetching(false)
            })
        }
        return debounce(loadOptions, debounceTimeout)
    }, [debounceTimeout, fetchOptions, afterFetch, options])

    const onChange = (e) => {
        setValue(e);
        if (type === "pickup") {
            setP(e)
        }
        if (type === "delivery"){
            setD(e)
        }
    }

    return (
        <Select
            showSearch
            className="sl"
            style={{width: "100%", height: "40px"}}
            placeholder={placeholder}
            allowClear={true}
            filterOption={false}
            onSearch={debounceFetcher}
            onFocus={() => !options.length && debounceFetcher("")}
            notFoundContent={fetching ? <Spin size="small"/> : <Empty/>}
            options={options}
            onChange={onChange}
            value={value}
            defaultValue={defaultValue}
        />
    );
}

export default SelectOption;
