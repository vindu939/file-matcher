/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/file-matcher/LICENSE
 */

import { FileFilter } from './filefilter';


/**
 * @description
 * Declares the interface for the search options, used in the
 * find method.
 */
export interface FindOptions {
    /**
     * Path to be searched
     */
    path: string;
    /**
     * Filters to be applied to the file search, as file attributes, filename
     * patterns using globs and file content.
     *
     * @see {@link FileFilter}
     */
    fileFilter: FileFilter;
    /**
     * Recursive search? The default is false.
     */
    recursiveSearch?: boolean;
}