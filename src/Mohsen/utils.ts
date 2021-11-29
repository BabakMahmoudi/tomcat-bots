import axios from 'axios'
import { CandleStickCollection } from '../../../tomcat/build/main/lib/common/CandleStickCollection'
import { CandleStickData } from '../../../tomcat/build/main/lib/common/CandleStickData'
// import { CandleStickCollection, CandleStickData } from '@gostarehnegar/tomcat/src/lib/common'

export class Utils {

    static isGreen(candle: CandleStickData) {
        return candle.close > candle.open
    }
    static countGreenCandle = (candles: CandleStickCollection, t1: number, t2: number) => {
        const t1Index = candles.items.findIndex(x => x.openTime >= t1)
        const t2Index = candles.items.findIndex(x => x.openTime == t2)
        let res = 0
        if (t1Index < 0 || t2Index < 0) {
            return res
        }
        for (let i = t1Index; i <= t2Index; i++) {
            if (Utils.isGreen(candles.items[i])) {
                res++
            }
        }
        return res
    }
    static getArgumentValue(args: string[], key: string) {
        for (let i = 0; i < args.length; i++) {
            if (args[i].toLowerCase().includes(key)) {
                return args[i + 1]
            }
        }
        return null
    }
    static async checkSymbol(symbol: string) {
        axios.get(`https://api.binance.com/api/v3/exchangeInfo?symbol=${symbol}`).then((res) => {
            (res)
            return symbol
        })
            .catch((err) => {
                (err)
                throw "symbol not found"
            })
    }

}
export class Mohsen {
    signal: string
    candle: CandleStickData
}