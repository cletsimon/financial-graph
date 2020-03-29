import { View } from "../core/view";
export declare function _get_ws_url(app_path: string | undefined, absolute_url: string | undefined): string;
export declare function add_document_from_session(websocket_url: string, token: string, element: HTMLElement, roots?: HTMLElement[], use_for_title?: boolean): Promise<View[]>;
