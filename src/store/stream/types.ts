export interface Stream {
    file_name: string;
    file_type: string;
    rtsp_url: string;
    audio_codec: string;
    bit_rate: string;
    fps: string;
    play_time: string;
    uuid: string;
    video_codec: string;
}

export interface StreamState {
    streams: Array<Stream>
    stream?: Stream;
    error: boolean;
}