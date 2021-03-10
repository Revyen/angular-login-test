import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Post new Error-Message',() => {
    let testString: string;
    testString = 'this is a test message'
    service.updateMessage(testString);

    expect(service.message).toEqual(testString);
  });
});
