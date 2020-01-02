
export default class Devices 
{

    public deArray: {id:string, current:number}[];

    public getCurrent() {
        return 'to be defined';
    }

    public setLimits(maxCurrent) {
        // split equally into devices
        if (this.deArray.length > 0) {
            this.deArray.map(x => x.current = maxCurrent / this.deArray.length);
        }

        // split accoring to weighted average of available capacities
    }
    
    public addDevice(itm) {
        this.deArray.push(itm);
    }

}
