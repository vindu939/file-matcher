/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/file-matcher/LICENSE
 */

/**
 * @description
 * Shows the options for file reading, to be passed to the fs.readFile function.
 * - The encoding options are the same as available at node.
 * - flag can be r - read and w - write
 */
export interface ReadFileOptions {
    encoding: 'ascii' | 'base64' | 'binary' | 'hex' | 'ucs2' | 'ucs-2' | 'utf16le' | 'utf-16le' | 'utf8' | 'utf-8';
    flag: 'r' | 'w';
}