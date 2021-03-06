/**
 * @license
 * Copyright Mauricio Gemelli Vigolo. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/mauriciovigolo/file-matcher/LICENSE
 */

import { AttributeFilter } from './attributefilter';
import { ReadFileOptions } from './readfileoptions';

/**
 * @description
 * Declares the interface to configure the available
 * filters for the file search, including file attributes, file name
 * and file content.
 *
 * As it's possible to use multiple filters, it's important to know that
 * the conjunction operator in the FileFilter is always AND.
 */
export interface FileFilter {
    /**
     * Glob pattern for looking for files - filenames.
     * Examples:
     * '*.js'
     * ['**','!*.ts']
     */
    fileNamePattern?: string | Array<string>;
    /**
     * List of file attribute filters as file size,
     * modified and birth dates. It's possible to send the same attribute more
     * than one time, to checking, for example, if a file size is GreaterThan and
     * LessThan a specific value.
     */
    attributeFilters?: Array<AttributeFilter>;
    /**
     * RegExp to match the contents os a file.
     * This field is optional and if informed will apply to the file contents.
     * So watch your regex to avoid performance issues if you have a big amount
     * of files.
     */
    content?: RegExp;
    /**
     * These options will be used in the Node.JS `fs.ReadFile` function.
     * The @see {@link ReadFileOptions} has the same options as the original.
     */
    fileReadOptions?: ReadFileOptions;
}