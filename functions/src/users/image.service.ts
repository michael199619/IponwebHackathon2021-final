import {Injectable} from "@nestjs/common";
import im from 'imagemagick';
import fetch from 'node-fetch';
import {promisify} from 'util';
import {ConfigService} from "@nestjs/config";

type N = 'N' | 'S' | 'E' | 'W';

const readMetadata = promisify(im.readMetadata);

@Injectable()
export class ImageService {
    constructor(
        private readonly configService: ConfigService
    ) {
    }

    private decodeGps(str: string, n: N): number {
        const [degress, minutes, seconds] = str.split(',').map(e => e.split('/').reduce((a, b) => +a / +b, 1));
        let char = 1;

        if (n === 'S' || n === 'E') {
            char = -1;
        }

        return +((degress + minutes + seconds / (60 * 60)) * char).toFixed(6);
    }

    public async getCity(path: string): Promise<string> {
        const {exif} = await readMetadata(path);

        if (!exif) {
            throw new Error('gps is not exists');
        }

        const {gpsLatitude, gpsLatitudeRef, gpsLongitude, gpsLongitudeRef} = exif;
        const latitude = this.decodeGps(gpsLatitude, gpsLatitudeRef);
        const longitude = this.decodeGps(gpsLongitude, gpsLongitudeRef);
        const api = this.configService.get('api');

        return await fetch(`${api}&lat=${latitude}&lon=${longitude}`)
            .then(e => e.json())
            .then(e => e.display_name);
    }
}