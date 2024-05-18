// pages/HomePage.ts

import { Page } from 'playwright';
import { expect } from 'playwright/test';

export class ComplexUIPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(flag : number) {

        (flag) ? await this.page.goto('https://davidwalsh.name/demo/multiple-file-upload.php') : await this.page.goto('https://demoqa.com/droppable/');
    }

    async getFileDropZone() {
        return this.page.locator('#filesToUpload');
    }

    async getDraggableElement() {
        return this.page.getByText('Drag me', {exact:true});
    }

    async getDroppableArea() {
        return this.page.getByLabel('Simple').locator('#droppable');
    }

    async validateDragDrop() {
        await expect( this.page.getByLabel('Simple').locator('#droppable') ).toHaveText('Dropped!')
    }

    
}
