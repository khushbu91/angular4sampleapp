import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  templateUrl: './modal-component.html'
})
export class NgbdModalContent {

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
  }
}
