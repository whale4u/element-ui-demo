
import axios from 'axios';

export const getData = (url) => {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            if ([null, undefined,  ''].includes(res) || [null, undefined,  ''].includes(res.data)) reject('error');
            let data = null;

            if (res.data) data = res.data;
            resolve(data);
          })
    });
} 