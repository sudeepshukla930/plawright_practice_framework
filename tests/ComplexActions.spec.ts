// __tests__/interaction.spec.ts

import { test, expect } from '@playwright/test';
import { ComplexUIPage } from '../pages/ComplexUserInteraction';

test.describe('Complex User Interactions', () => {
  let complexUI;

    test.beforeEach(async ({ page }) => {
       complexUI = new ComplexUIPage(page);
       
    });

    test('Should be able to perform drag and drop', async () => {
      
         await complexUI.navigate(0);
        const draggable = await complexUI.getDraggableElement()
        const droppable = await  complexUI.getDroppableArea();

        await draggable.dragTo(droppable);
        await complexUI.validateDragDrop();
    });

    test('Should be able to upload a file', async () => {
        
        await complexUI.navigate(1);
        const fileLocator = await complexUI.getFileDropZone();

        await fileLocator.setInputFiles(["demoFile.txt"]);
      
    });
});
