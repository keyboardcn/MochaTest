import Devices from '../Devices';
import { assert } from 'chai';

describe('addDevice', function() {
    let devices = new Devices();

    it('array length should incease by 1 each time', function(){
        const de1 = {id: '1', current:10};
        devices.deArray = [];
        devices.addDevice(de1);
        let result = devices.deArray.length;
        assert.equal(result, 1);
    });

    it('array length should incease by 1 each time', function(){
        const de2 = {id: '2', current:11};
        devices.addDevice(de2);
        let result = devices.deArray.length;
        assert.equal(result, 2);
    });

    it('should split maxCurrent equally into devices', function(){
        devices.setLimits(100);
        let result = devices.deArray[0].current;
        assert.equal(result, 50);
    });
})
